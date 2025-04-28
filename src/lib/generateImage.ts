export async function generateImage(prompt: string): Promise<string> {
  const endpoint = process.env.NEXT_PUBLIC_HUGGINGFACE_API_URL;
  const token = process.env.NEXT_PUBLIC_HUGGINGFACE_API_TOKEN;

  if (!endpoint || !token) {
    throw new Error('Hugging Face endpoint or token is not set in environment variables.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: prompt,
      options: { wait_for_model: true },
    }),
  });

  console.log('Huggingface response status:', response.status);

  if (!response.ok) {
    const errorDetail = await response.json();
    console.error('Huggingface Error:', errorDetail);
    throw new Error('Failed to generate image.');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  return url;
}
