const projectModal = document.getElementById('projectModal');

export function openModal() {
  projectModal.style.display = 'block';
}

export function closeModal() {
  projectModal.style.display = 'none';
}

export function clickOutside(e) {
  if (e.target == projectModal) {
    projectModal.style.display = 'none';
  }
}