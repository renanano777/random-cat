"use client";
import {useState} from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css"; 

// コンポーネントの引数を定義する
type CatImageProps = {
    url:string;
};

// 画像を表示するコンポーネント
export function CatImage({url} : CatImageProps) {
    // userStateを使って状態を管理
    const[imageUrl, setImageUrl] = useState(url);
    // 画像を取得する巻数
    const refreshImage = async () => {
        setImageUrl("") // 初期化
        const image = await fetchImage();
        setImageUrl(image.url);
    }
    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>他のにゃんこも見る</button>
            <div className={styles.frame}>
             {imageUrl && <img src={imageUrl} className={styles.img}/>}
            </div>
        </div>
    )
}

