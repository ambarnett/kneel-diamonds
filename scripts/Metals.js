import { checkOrderState, getMetals, setMetal } from "./database.js"
import { dispatchOrderBtnEvent } from "./orderBtnEvent.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseFloat(event.target.value))
            if(checkOrderState()){
                dispatchOrderBtnEvent()
            }
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

