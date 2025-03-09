// Common button action handlers

export const handleView = (item, itemType) => {
  console.log(`Viewing ${itemType}:`, item);
  alert(`Viewing ${itemType}: ${item.name || item.id || 'Item'}`);
};

export const handleEdit = (item, itemType) => {
  console.log(`Editing ${itemType}:`, item);
  alert(`Editing ${itemType}: ${item.name || item.id || 'Item'}`);
};

export const handleDelete = (item, itemType) => {
  if (window.confirm(`Are you sure you want to delete this ${itemType}?`)) {
    console.log(`Deleting ${itemType}:`, item);
    alert(`${itemType} deleted successfully!`);
  }
};

export const handleConfirm = (item) => {
  console.log('Confirming:', item);
  alert(`${item.type || 'Item'} confirmed successfully!`);
};

export const handleCancel = (item) => {
  if (window.confirm('Are you sure you want to cancel?')) {
    console.log('Canceling:', item);
    alert(`${item.type || 'Item'} cancelled successfully!`);
  }
};

export const handleNewItem = (itemType) => {
  console.log(`Creating new ${itemType}`);
  alert(`New ${itemType} form would open here`);
}; 