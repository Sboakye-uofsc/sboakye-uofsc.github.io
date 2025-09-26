document.getElementById("btn-loop").onclick = () => {
	const container = document.getElementById("loop");
	const treeCloud = document.getElementById("tree-cloud");

	const numberOfCopies = 6;
	
	const originalCopy = container.querySelectorAll('.cloned-art');
	originalCopy.forEach(copy => copy.remove());

	for (let i = 0; i < numberOfCopies; i++) {
		const treeCloudCopy = treeCloud.cloneNode(true);
		treeCloudCopy.classList.add('cloned-art');
		treeCloudCopy.style.display = 'flex';
		treeCloudCopy.style.display = 'inline-block';
		treeCloudCopy.style.margin = '4px'

		container.appendChild(treeCloudCopy);

	}

};