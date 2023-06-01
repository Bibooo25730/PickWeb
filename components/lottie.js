// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Lottie() {
    return (
        <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: '300px', width: '300px' }}
        >
            <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    )
}