
export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}