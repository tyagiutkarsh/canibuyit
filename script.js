document.getElementById("calculate-btn").addEventListener("click", () => {
    const price = parseFloat(document.getElementById("price").value);
    const salary = parseFloat(document.getElementById("salary").value);

    if (!price || !salary) {
        alert("Please enter both the product price and your salary.");
        return;
    }

    const workDays = Math.ceil(price / salary);
    const purchaseDate = new Date();
    purchaseDate.setDate(purchaseDate.getDate() + workDays);

    document.getElementById("result").innerHTML = `
        <p>Product Price: ₹${price}</p>
        <p>You need to work <strong>${workDays}</strong> days to buy this item.</p>
        <p>Estimated purchase date: <strong>${purchaseDate.toISOString().split('T')[0]}</strong></p>
    `;
});
