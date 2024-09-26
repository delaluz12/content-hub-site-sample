import { getData } from "./data";

export async function getAssetData() {
  const query =
    '{ assets:allM_Asset( where: { assetMediaToAsset: { m_AssetMedia_ids: "M.AssetMedia.jpg" } }) { pageInfo { hasNext endCursor } results { id fileName description urls assetToPublicLink { results { id status relativeUrl resource expirationDate } } } } }';
  const assetData = await getData(query);
  console.log(assetData.assets.results);
  return assetData.assets.results;
}

export async function getAssetsWithUrls() {
  const query =
    '{ assets:allM_Asset(where: { assetMediaToAsset: { m_AssetMedia_ids: "M.AssetMedia.jpg" } }) { pageInfo { hasNext endCursor } results { id title fileName description urls assetToPublicLink { results { id status relativeUrl resource expirationDate } } } } }';
  const assetData = await getData(query);
  // Filter out results where the 'urls' object is empty
  const filteredResults = assetData.assets.results.filter(
    (asset) => Object.keys(asset.urls).length > 0,
  );
  console.log(filteredResults);
  return filteredResults;
}
//contentType: "{ allM_ContentType { results { id name description parent { id name } } } }"
//assets:"{ allM_Asset(first: 5, where: { assetMediaToAsset: { m_AssetMedia_ids: \"M.AssetMedia.jpg\" } }) { pageInfo { hasNext endCursor } results { urls id fileName assetToPublicLink { results { id status relativeUrl resource expirationDate } } } } }"

// all available types to display (i.e. the entities/defintions that are enabled to be published): "{ __schema { types { name } } }"
// running into issues
