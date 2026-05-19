

function showToast() {
    let toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


const filterBtns = document.querySelectorAll('.blog-tag-btn');
const cards = document.querySelectorAll('.blog-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});


function toggleFaq(button) {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-a');
    const icon = button.querySelector('.chevron');

    document.querySelectorAll('.faq-item').forEach(faq => {
        if (faq !== item) {
            faq.classList.remove('active');
            faq.querySelector('.faq-a').style.maxHeight = null;
            faq.querySelector('.chevron').textContent = '+';
        }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "−";
    } else {
        answer.style.maxHeight = null;
        icon.textContent = "+";
    }
}