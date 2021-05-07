     /**update(x)でACの動きを設定している**/
        /**ACの値(value)を＝で更新・ゼロにする。ACを押した時にinputの部分に何も表示させない&オールクリアの設定をした。**/
         function update(x){
            document.querySelector('input').value = x
        }
        
        /**appendのところはAC・＝以外のボタンを示している**/
        /**ここでの+=の意味は数字を並べる。+を無くすと２桁以上の数字が表示されなくなってしまう。＋を入れることによって２桁以上表示させられる。**/
        function append(x){
            document.querySelector('input').value += x
        }
        
        
        function calc(){
            const v = document.querySelector('input').value
        /**try~catch文を使うことで、予期していない異常によりエラー（例外）が発生する場面で意図的にエラーを回避できる。**/
        const f = new Function('return ' + v)
        update( f().toString())}