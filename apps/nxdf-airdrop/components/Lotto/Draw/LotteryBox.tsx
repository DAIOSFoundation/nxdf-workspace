import React from "react";
import LotteryItem from "./LotteryItem";
import "./lottoIndex.css";
import {
  ref,push
} from "@firebase/database"
import {dbService} from "../firebase";
const numbers = [...Array(10).keys()];

export default class LotteryBox extends React.Component<
    LotteryBoxProps,
    LotteryBoxState
> {

    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = {
            number: [0, 0, 0, 0],
            effect: false,
        };
    }
    
    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            const arr:number[] = [];
            for (let i = 0; i <= 3; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false });
                this.update();
            }, 4*1000);
        }
    };

    update = () => {
        const hook = window.location.search;
        const userId=hook.split('=')
        const Ref=ref(dbService,'drawnumber/')
        const today=new Date()

        if(this.state.number.includes(0)===false){
            push(Ref,{
                numbers: this.state.number.join(''),
                date: today.toUTCString(),
                userid:userId[1]
            })
            .then(()=>console.log(Ref))
        }
    }

    buy = async () => {
        this.props.buyTicket();
    }

    render() {
      return (
       <>
                <div id="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="red"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="grey"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="bonus"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    
                </div>
                <div>
                    <button
                        id="btn"
                        className={this.state.effect ? "hide" : ""}
                        onClick={this.randomize}
                    >
                      Draw
                    </button>
                    <button
                        id="btn"
                        className={this.state.effect ? "hide" : ""}
                        onClick={this.buy}
                    >
                      Buy
                    </button>
                </div>
          </>
        
        );
    }
}
