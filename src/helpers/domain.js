import parseDomain from '../node_modules_src/parse-domain/lib/parseDomain';

export const getDomain = () => {
  const domainHash = parseDomain(window.location.href);
  let domain = '';
  if (domainHash) {
    domain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;
  }

  return domain;
}
