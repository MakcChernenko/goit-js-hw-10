import iziToast from 'izitoast';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = parseInt(this.elements.delay.value);
  const state = this.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Успіх',
        message: `✅ Виконаний проміс за ${delay}мс`,
        titleColor: 'white',
        messageColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Відхилений проміс за ${delay}мс`,
        titleColor: 'white',
        messageColor: 'white',
        backgroundColor: 'red',
      });
    });

  this.reset();
});
