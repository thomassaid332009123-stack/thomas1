document.addEventListener("DOMContentLoaded", () => {
    initCounters();
});

function initCounters() {
    const counters = document.querySelectorAll('.count-number');
    const speed = 200; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const count = parseInt(counter.innerText, 10);
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target.toLocaleString() + (target > 1000 ? '+' : '');
            }
        };

        updateCount();
    });
}