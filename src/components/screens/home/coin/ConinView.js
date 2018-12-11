import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import CoinDetail from './CoinDetail';
import { getCoinIconUri } from "./Constants";
import { coinApis } from '../../../../apis/home/coinApi';

const sampleData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "6195.6",
        "price_btc": "1.0",
        "24h_volume_usd": "8119580000.0",
        "market_cap_usd": "103323711420",
        "available_supply": "16676950.0",
        "total_supply": "16676950.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-1.8",
        "percent_change_24h": "4.19",
        "percent_change_7d": "-15.65",
        "last_updated": "1510556652"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "310.13",
        "price_btc": "0.0493027",
        "24h_volume_usd": "1636680000.0",
        "market_cap_usd": "29678006174.0",
        "available_supply": "95695373.0",
        "total_supply": "95695373.0",
        "max_supply": null,
        "percent_change_1h": "-0.89",
        "percent_change_24h": "1.81",
        "percent_change_7d": "4.39",
        "last_updated": "1510556649"
    },
]

class CoinView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],      // 변경되는 coin data를 갱신해줄 배열 객체
            isLoaded: false,
            timer: null
        }; // 중요한 개념이다 자식 Component의 data가 변했을 때 state가 변경된 값을 다시 렌더링 해줄 수 있어야 한다. 
    }

    componentDidMount() {
        this._getCoinDatas(30);

        let interval = setInterval(() => {
            this._getCoinDatas(30);
            //console.log('toggled');
        }, 10000);
        this.setState({ timer: interval })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        console.log("CoinView unMount");
    }

    _getCoinDatas(limit) {
        this.setState({
            isLoaded: false,
        });
        let json = coinApis('get', null, null);
        console.log(json);

        if (json != null) {
            let date = new Date();
            let now = date.toLocaleString();

            //console.log(this.props.refreshDate);
            if (this.props.refreshDate != null) {
                this.props.refreshDate(now);        // 부모 component의 state 값에 보낼 수 있다 
            }

            this.setState({
                // data를 setState를 이용해 재설정 되고 state 변수는 새로 갱신되는 것이다 
                // 렌더안에서 props의 변경인 인지해서 변경하기 위한 것이다 
                // Prop에서 state 변경만 인식해서 다시 렌더하기 위해 
                coinDatas: json,
                isLoaded: true,
            })

        }
        

        // 외부에서 API 호출로 데이터 겟
        //json 변환
        // fetch(
        //     `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
        // )
        // .then(response => response.json() )
        // .then(data => {      
        //     //console.log(data);
        //     let date = new Date();
        //     let now = date.toLocaleString();

        //     //console.log(this.props.refreshDate);
        //     if (this.props.refreshDate != null) {
        //         this.props.refreshDate(now);        // 부모 component의 state 값에 보낼 수 있다 
        //     }

        //     this.setState({
        //         // data를 setState를 이용해 재설정 되고 state 변수는 새로 갱신되는 것이다 
        //         // 렌더안에서 props의 변경인 인지해서 변경하기 위한 것이다 
        //         // Prop에서 state 변경만 인식해서 다시 렌더하기 위해 
        //         coinDatas: data,
        //         isLoaded: true,
        //     });
        // })
        // .catch(error => {
        //     console.log(error);
        //     throw error;
        // });
    }

    render() {
        // 아래와 같은 부분을 포문을 이용해서 배열로 가져올 수 있다
        // let coinDetailCells = (
        //     <View>
        //         <CoinDetail></CoinDetail>
        //         <CoinDetail></CoinDetail>
        //         <CoinDetail></CoinDetail>
        //         <CoinDetail></CoinDetail>
        //     </View>
        // )
        // ES6 문법(map)
        // let detailCells = sampleData.map( (data, index) => {
        //     const { rank, name, price_usd, market_cap_usd, last_updated } = data;  // Destructuring
        //     return (
        //         <CoinDetail 
        //             key={index}
        //             rank={rank}
        //             name={name}
        //             price={price_usd}
        //             volume={market_cap_usd}
        //             iconUri={getCoinIconUri(name)}
        //         />
        //     );
        // })
        //console.log(this.state.coinDatas);
        let detailCells = [];
        for( var i = 0; i < this.state.coinDatas.length; i++) {
            let data = this.state.coinDatas[i];
            let coinDetail = (
                <CoinDetail 
                    key={data.id}        // 키값으로 어떤 컴포넌트가 변경이 되었는지 알기 위해 업데이트할 키를 알아야 한다 
                    rank={data.rank}        // 위에서 전체 새로고침이 아니다 해당 컴포넌트만 바뀌니까 RN이 빠른 이유이다  
                    name={data.name}
                    price={data.price_usd}
                    volume={data.market_cap_usd}
                    iconUri={getCoinIconUri(data.name)}
                    time={data.last_updated}
                />
            )
            detailCells.push(coinDetail);
        }
        
        return (
            <ScrollView style={this.props.style}>
                {detailCells}
            </ScrollView>
        );
    }
}
export default CoinView;

const styles = StyleSheet.create({
    coinView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
