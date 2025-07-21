function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll('.filter-dropdown');
    dropdowns.forEach(drop => {
      if (drop.id === id) {
        drop.style.display = (drop.style.display === 'block') ? 'none' : 'block';
      } else {
        drop.style.display = 'none';
      }
    });
  }

  // Đóng khi click ngoài vùng dropdown
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.filter-item')) {
      document.querySelectorAll('.filter-dropdown').forEach(drop => drop.style.display = 'none');
    }
  });