const renderHTML = (selector,template,data) => {
  if(selector.length === 0){
    console.error('no selector defined')
  } else if (template.length === 0 || template === undefined) {
    console.error('no template found')
  } else if (data.length === 0 || data === undefined) {
    console.error('no data found')
  } else {
    let viewTemplate = document.getElementById(selector)
    viewTemplate.innerHTML = template(data)
  }
}

export {renderHTML}
