import msgform from './MsgProvider'

console.log(msgform)
const staticMessage = msgform.compile('This is a static message Kostas {VAR, select, undefined{} other{{VAR}}}')
const selectMessage = msgform.compile('{GENDER,select,male{He}female{She}other{They}} liked this.')
// Doesn't compile with es-locale
// const selectOrdinalMessage = msgform.compile('The {N, selectordinal, one{12} two{two} other{#.}} message.')
const pluralMessage = msgform.compile('{N, plural, =1{#ro} =2{#do} other{#.o}} Set.')
function App() {
  return (
    <div className="App">
		<h5 style = {{backgroundColor: 'orange'}}>
			{staticMessage({VAR: 'WEWEW'})}	
		</h5>
		<p><strong>Simple dynamic type of message</strong></p>
		<h5 style = {{backgroundColor: 'lime'}}>
			{staticMessage({VAR: 'VALUE'})}
		</h5>
		<p><strong>Select type of message</strong></p>

		<h5 style = {{backgroundColor: 'pink'}}>
			{pluralMessage({N:  2})}
		</h5>
	</div>
  );
}


export default App;