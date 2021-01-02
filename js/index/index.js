const nav = Pager.nav
const lib = ao2.lib

function mkmenus(data){
  let menus = ui_list({
    data: data,
    itemMethod: {
      aim(e, param, inst){
        let to = inst.attr('to')
        let index = inst.attr('index')
        let data = inst.getData()
        nav.redirectTo({ url: to })
        menus.select(index)
      }
    }
  })
  return <menus.UI />
}


export default Pager.pages([
  {url: '/index/a', content: import('./_subpages/a')},
  {url: '/index/b', content: import('./_subpages/b')},
  {url: '/index/c', content: import('./_subpages/c')},
], {
  select: '/index/a',
  menus: function() {
    return mkmenus([
      {title: '菜单1', attr: {to: '/index/a', index: 0}},
      {title: '菜单2', attr: {to: '/index/b', index: 1}},
      {title: '菜单3', attr: {to: '/index/c', index: 2}},
      {title: '菜单4', attr: {to: '/index/a', index: 3}},
      {title: '菜单5', attr: {to: '/index/b', index: 4}},
      {title: '菜单6', attr: {to: '/index/c', index: 5}},
    ])
  }
})