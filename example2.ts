/**
 * Example Case 4
 *
 * 캐릭터의 움직이는 경로가 몇 가지 패턴으로 정해져 있다.
 * 정해진 패턴에 따라 경로를 이동하는 코드를 작성하고자 한다.
 * 이동경로 패턴이 있고 패턴값이 1이면 x축으로 2만큼 2이면 ycnrdmfh
 *
 * CheckPoint
 * - 클린코드 관점에서 컨벤션 준수
 * - if else문을 제거, 새로운 if 문이 추가 되었을때?
 * - Healer, Archer 캐릭터가 추가 되었을때... OCP 위반 해결
 */

abstract class Character {
    abstract draw()
}

export class Warrior extends Character {
    private pathPattern: number;

    constructor(pathPattern: number) {
        super();
        this.pathPattern = pathPattern
    }

    public draw() {
        let x, y: number = 0;
        if (this.pathPattern == 1) {
            x += 4;
        } else if (this.pathPattern == 2) {
            y += 10;
        } else if (this.pathPattern == 4) {
            x += 4;
            y += 10;
        }

        // drawing by x, y
    }
}