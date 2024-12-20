document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(
        item.querySelector(".price").textContent.replace("$", "")
      );
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  };

  cartItems.forEach((item) => {
    const likeButton = item.querySelector(".like-btn");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("liked");
      if (likeButton.classList.contains("liked")) {
        likeButton.textContent = "❤️";
      } else {
        likeButton.textContent = "💖";
      }
    });
  });

  cartItems.forEach((item) => {
    const increaseButton = item.querySelector(".increase-btn");
    const decreaseButton = item.querySelector(".decrease-btn");
    const quantitySpan = item.querySelector(".quantity");

    increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
      calculateTotalPrice();
    });

    decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
        calculateTotalPrice();
      }
    });
  });

  cartItems.forEach((item) => {
    const deleteButton = item.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      item.remove();
      calculateTotalPrice();
    });
  });

  calculateTotalPrice();
});
