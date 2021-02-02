(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{734:function(n,a,t){"use strict";t.r(a);var e=t(103),s=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"go语言的并发模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go语言的并发模型"}},[n._v("#")]),n._v(" Go语言的并发模型")]),n._v(" "),t("p",[n._v("Go语言实现了一下两种并发形式:")]),n._v(" "),t("p",[n._v("第一种是大家普遍认知的："),t("strong",[n._v("多线程共享内存")]),n._v("。其实就许多主流编程语言中的多线程开发。")]),n._v(" "),t("p",[n._v("另外一种是Go语言特有的，也是Go语言推荐的："),t("strong",[n._v("CSP（communicating sequential processes）并发模型")]),n._v("。该方式是Go语言最大的两个亮点goroutine和chan，二者合体的典型应用。")]),n._v(" "),t("h2",{attrs:{id:"什么是csp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是csp"}},[n._v("#")]),n._v(" 什么是CSP")]),n._v(" "),t("blockquote",[t("p",[n._v("CSP 是 Communicating Sequential Process 的简称，中文可以叫做通信顺序进程，是一种并发编程模型，是一个很强大的并发数据模型，是上个世纪七十年代提出的，用于描述两个独立的并发实体通过共享的通讯 "),t("strong",[n._v("channel")]),n._v("(管道)进行通信的并发模型。")])]),n._v(" "),t("p",[n._v("Go语言其实只用到了 CSP 的很小一部分，即理论中的 Process/Channel（对应到语言中的 goroutine/channel）：这两个并发原语之间没有从属关系， Process 可以订阅任意个 Channel，Channel 也并不关心是哪个 Process 在利用它进行通信；Process 围绕 Channel 进行读写，形成一套有序阻塞和可预测的并发模型。")]),n._v(" "),t("p",[n._v("相信大家一定见过一句话：")]),n._v(" "),t("blockquote",[t("p",[n._v("Do not communicate by sharing memory; instead, share memory by communicating.")])]),n._v(" "),t("p",[n._v("不要通过共享内存来通信，而要通过通信来实现内存共享。")]),n._v(" "),t("p",[n._v("这就是 Go 的并发哲学，它依赖 CSP 模型，基于 channel 实现。")]),n._v(" "),t("h2",{attrs:{id:"mutex-csp-实现方式对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mutex-csp-实现方式对比"}},[n._v("#")]),n._v(" Mutex & CSP 实现方式对比")]),n._v(" "),t("h4",{attrs:{id:"sync-mutex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sync-mutex"}},[n._v("#")]),n._v(" sync.Mutex")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var lock sync.Mutex\nvar wg sync.WaitGroup\n\nvar m1 map[int]int\nvar m2 map[int]int\n\nfunc update_map_by_mutex(i int) {\n    defer lock.Unlock()  //解锁\n    lock.Lock() //上锁\n    m1[i] = i   //赋值\n    wg.Done()\n}\n\nfunc main() {\n    m1 = make(map[int]int, max)\n    m2 = make(map[int]int, max)\n    for i := 0; i < 1000; i++ {  //起1000个协程，通过加锁的方式保证安全并发\n        wg.Add(1)\n        go update_map_by_mutex(i)\n    }\n    wg.Wait()\n}\n\n")])])]),t("h4",{attrs:{id:"csp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csp"}},[n._v("#")]),n._v(" csp")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var m1 map[int]int\nvar m2 map[int]int\n\ntype Op struct {\n    key int\n    val int\n}\nvar ch chan Op\nvar wg sync.WaitGroup\n\nfunc update_map_by_chan(i int) {  //往channel中塞数据\n    ch <- Op{key: i, val: i}\n    wg.Done()\n}\n\nfunc wait_for_chan(m map[int]int) {  //从channel中读取数据并处理\n    for {\n        if op,ok := <-ch;ok{\n            m[op.key] = op.val\n        } else {\n            break\n        }\n    }\n    wg.Done()\n}\n\nfunc main() {\n\n    m1 = make(map[int]int, max)\n    m2 = make(map[int]int, max)\n    ch = make(chan Op)\n    wg.Add(1)\n    go wait_for_chan(m2)\n    for i := 0; i < max; i++ {\n        wg.Add(1)\n        go update_map_by_chan(i)\n    }\n    wg.Wait()\n}\n")])])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),t("p",[n._v("虽然csp是go更为推荐的并发模型，但还是需要根据实际情况酌情选用，切勿过度使用!")])])}),[],!1,null,null,null);a.default=s.exports}}]);