export const changeTheme = (currentTheme, newTheme, linkElementId) => {
  const linkElement = document.getElementById(linkElementId);
  const cloneLinkElement = linkElement.cloneNode(true);

  cloneLinkElement.setAttribute("href", newTheme);
  cloneLinkElement.onerror = () => {
    linkElement.parentNode.removeChild(cloneLinkElement);
  };
  cloneLinkElement.onload = () => {
    linkElement.parentNode.removeChild(linkElement);
    document.head.appendChild(cloneLinkElement);
  };

  linkElement.parentNode.insertBefore(
    cloneLinkElement,
    linkElement.nextSibling
  );
};
