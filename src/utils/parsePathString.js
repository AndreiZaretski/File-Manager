export const parseStringPath = (str)=> {
  const elements = str.split(' ');
  if (elements[0].startsWith('\\0' || '\0')) {
    
    const secondIndex = elements.findIndex((el, i) => i > 0 && el.startsWith('\\0' || '\0'));
    
    if (secondIndex !== -1) {
    
    const firstPath = elements.slice(0, secondIndex).join(' ').replace('\\0' || '\0', '');
    
    const secondPath = elements.slice(secondIndex).join(' ').replace('\\0' || '\0', '');
    return {source: firstPath, target: secondPath};
    }
    return {source: elements[0].replace('\\0' || '\0', ''),
    target: elements[1]}
    }
    
    return {source: elements[0], target: elements[1]};

}