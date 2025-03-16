import { useEffect, useState } from "react";

const Example = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        window.setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
    // 空の配列を定義することでexampleコンポーネントが読み込まれたタイミングだけ処理が実行されるようになる
    // この部分の依存配列に入れた値が呼び出されるたびにuseEffectで定義された関数が呼び出される
    }, [])

    useEffect(() => {
        document.title = 'counter:' + time;
        // 配列に定義したtimeが呼び出されるたびにlocalstorageにtimeが代入される
        window.localStorage.setItem('time-key', time);
    }, [time])

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
        </h3>
    );
};

export default Example;
