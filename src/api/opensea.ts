import type { OpenseaToken, FirestoreDocument, TokenMeta } from "@/types/types";

const OPENSEA_API_KEY = '742ea11e1d864fe2b23ac7cfe66a43f7';

// loadTokensByAccountID returns all associated opensea tokens for a given account id
export async function loadTokensByAccountID(wallet_address: string): Promise<Array<OpenseaToken>> {
    const res = await fetch(`https://api.opensea.io/api/v1/assets/?owner=${wallet_address}`, {
        headers: {
            'X-API-KEY': OPENSEA_API_KEY
        }
    });
    const res_json = await res.json();

    return res_json.assets;
}

// loadTokensByAccountID returns opensea tokens by a list asset contract addresses and token ids
export const loadTokensByTokenIDAndAssetContract = async (tokens: Array<FirestoreDocument<TokenMeta>>): Promise<Array<OpenseaToken>> => {
    let url = `https://api.opensea.io/api/v1/assets/?`
    tokens.forEach(t => {
        url += `asset_contract_addresses=${t.entity.asset_contract_address}&token_ids=${t.entity.token_id}&`
    })

    url = url.substring(0, url.length - 1)

    const res = await fetch(url, {
        headers: {
            'X-API-KEY': OPENSEA_API_KEY
        }
    });
    const res_json = await res.json();

    return res_json.assets;
}

// loadTokensCreatedByAddress returns opensea tokens that are created by a wallet address
export const loadTokensCreatedByAddress = async (wallet_address: string): Promise<Array<OpenseaToken>> => {
    const token_list = [];
    let cursor = "";
    while (true) {
        const res = await fetch(`https://api.opensea.io/api/v1/events?account_address=${wallet_address}&event_type=created&limit=50${cursor ? '&cursor=' + cursor : ""}`,
            {
                headers: {
                    'X-API-KEY': OPENSEA_API_KEY
                }
            }
        );
        const res_json = await res.json();

        // add creator to fit with other opensea endpoint pattern
        token_list.push(...res_json.asset_events.map((e: any) => {
            return { ...e.asset, creator: e.from_account};
        }));

        // continue to call api until all tokens have been retrieved
        cursor = res_json.next;
        if (!cursor) {
            break;
        }
    }
    return token_list;
}