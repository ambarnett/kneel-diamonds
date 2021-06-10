import {checkOrderState, getJewelryTypes, setJewelryType } from "./database.js"
import { dispatchOrderBtnEvent } from "./orderBtnEvent.js"

const jewelry_types = getJewelryTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelry") {
            setJewelryType(parseInt(event.target.value))
            if (checkOrderState()){
                dispatchOrderBtnEvent()
            }
        }
    }
)

export const typesOfJewelry = () => {
    let jewelryHTML = ""
    const listItems = jewelry_types.map(jewelry => {
        return `<input type="radio" name="jewelry" value="${jewelry.id}" /> ${jewelry.type}`
    })
    jewelryHTML += listItems.join("")
    // jewelryHTML += "</ul>"

    return jewelryHTML
}