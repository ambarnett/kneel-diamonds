import { getJewelryTypes, getMetals, getOrders, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const jewelry = getJewelryTypes()

    //remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundJewelry = jewelry.find(
        (jewel) => {
            return jewel.id === order.jewelryTypeId
        }
    )
    let totalCost = foundStyle.price + foundMetal.price + foundSize.price
    if(foundJewelry.id === 1) {
        totalCost = totalCost * 1
    } else if (foundJewelry.id === 2) {
        totalCost = totalCost * 2
    } else if (foundJewelry.id === 3){
        totalCost = totalCost * 4
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

