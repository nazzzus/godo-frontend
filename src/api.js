const BASE_URL = "http://localhost:8080/api/todos/"; 

export async function getTodos() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export async function createTodo(todo) {
    const respone = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });
    if (!respone.ok) {
        throw new Error('Network response was not ok');
    }
    return await respone.json();
}

export async function deleteTodo(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export async function updateTodo(id, updates) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
    
}

export async function markTodoAsCompleted(id) {
    const response = await fetch(`${BASE_URL}/${id}/complete`, {
        method: 'PATCH'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}