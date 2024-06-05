import axios from 'axios';

const fetchInstaData = async () => {
    const Token = import.meta.env.VITE_INSTA_TOKEN;
    const fields = 'media_url,media_type,permalink';
    const url = `https://graph.instagram.com/me/media?access_token=${Token}&fields=${fields}`;

    const { data } = await axios.get(url);
    return data.data;
};
export default fetchInstaData;
