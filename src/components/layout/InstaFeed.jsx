import React, { useEffect, useState } from 'react';
import fetchInstaData from '../api/InstagramApi.js';
import styles from './Feed.module.css';

function InstaFeed() {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchInstaData();
            setFeedList(data);
        };
        getData();
    }, []);

    return (
        <section className={styles.album}>
            {feedList.map((item) => (
                <a
                    key={item.id}
                    href={item.permalink}
                    target="_blank"
                    className={styles.item}
                >
                    {item.media_type === 'IMAGE' ? (
                        <img src={item.media_url} />
                    ) : (
                        <video controls>
                            <source src={item.media_url} />
                        </video>
                    )}
                </a>
            ))}
        </section>
    );
}

export default InstaFeed;
