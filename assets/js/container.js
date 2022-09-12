export const createContainer = (containerName, className, ...children) => {
  containerName = document.createElement('div');
  containerName.classList.add(className);
  children.forEach((child => containerName.appendChild(child)));
  
  return containerName;
}
