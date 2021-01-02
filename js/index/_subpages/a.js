function template(state, props) {
  return (
    <View>
      <Text>{state.title}</Text>
    </View>
  )
}

export default function(Pager) {
  return Pager({
    template,

    data: {
      title: '这是a页面'
    },
    
    onLoad(options){

    },

    onUnload(){

    },

    onReady(){

    }
  })
}