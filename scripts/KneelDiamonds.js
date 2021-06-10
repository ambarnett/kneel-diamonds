import { addCustomOrder, checkOrderState } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { orders } from "./Orders.js"
import { typesOfJewelry } from "./jewelryType.js"

document.addEventListener(
    "click",
    (event) => {
       if(event.target.id === "orderButton"){
            if (checkOrderState()) {
                addCustomOrder()
            } else {
                window.alert("please select from all options before placing order.")
            }
        }
    }
)

document.addEventListener("showOrderBtn", () => document.querySelector(".orderButton").classList.remove("isHidden"))

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <section class="choices__types options">
            ${typesOfJewelry()}
            </section>
            <button class="orderButton isHidden" id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orders()}
        </article>
    `
}

