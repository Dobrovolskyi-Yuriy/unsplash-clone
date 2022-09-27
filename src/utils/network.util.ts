export const isQueryParamsExist = (
  queryParams: string,
  paramName: string
): boolean => {
  return new URLSearchParams(queryParams).has(paramName);
};

export const getQueryParamByKey = (
  queryParams: string,
  key: string
): string | null => {
  return new URLSearchParams(queryParams).get(key);
};

export const isMainPage = () => window.location.pathname === "/";

export const generateOAuthUrl = () => {
  const query = new URLSearchParams({
    client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
    redirect_uri: window.location.origin,
    response_type: "code",
  });
  return `${process.env.REACT_APP_BASE_URL}/oauth/authorize?${query}&scope=public+write_likes`;
};
