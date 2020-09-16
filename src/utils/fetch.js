export default {
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
}
