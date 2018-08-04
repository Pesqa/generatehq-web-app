import parseDomain from 'parse-domain';

export const getDomain = () => {
  const domainHash = parseDomain(window.location.href);
  let domain = '';
  if (domainHash) {
    domain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;
  }

  return domain
}
