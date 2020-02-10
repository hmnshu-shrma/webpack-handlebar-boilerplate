//rendering templates
const renderHTML = (selector, template, data) => {
  let viewTemplate = document.getElementById(selector)
  viewTemplate.innerHTML = template(data)
}

export {renderHTML}
