export function openModal(modal) {
  modal.style.display = 'block';
}

export function closeModal(modal) {
  modal.style.display = 'none';
}

export function clickOutside(e, modal) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}