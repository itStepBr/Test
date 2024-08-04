document.getElementById('download-pdf').addEventListener('click', function () {
    html2canvas(document.body).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new window.jspdf.jsPDF();
        const imgWidth = 210; 
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('page.pdf');
    });
});
//возможность более быстрой загрузки страницы и сохранение данных
document.addEventListener('dblclick', function(event) {
    const target = event.target;
    if (target.hasAttribute('contenteditable')) {
      target.contentEditable = true;
      target.focus();
    }
  });

  document.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.hasAttribute('contenteditable')) {
      target.contentEditable = false;
      saveContent(target);
    }
  }, true);

  document.addEventListener('DOMContentLoaded', function() {
    restoreContent();
  });

  document.querySelectorAll('.text-element').forEach(element => {
    element.addEventListener('input', () => {
      element.classList.add('animate');
      setTimeout(() => {
        element.classList.remove('animate');
      }, 1000); // Убедитесь, что время здесь совпадает с длительностью анимации
    });
  });