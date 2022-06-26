"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13856],{63035:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o={key:"v-660718ab",path:"/guide/usage/groups.html",title:"Groups",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Configuration",slug:"configuration",children:[]},{level:2,title:"MQTT commands",slug:"mqtt-commands",children:[]},{level:2,title:"Controlling",slug:"controlling",children:[]},{level:2,title:"State changes",slug:"state-changes",children:[]},{level:2,title:"How do groups work?",slug:"how-do-groups-work",children:[]},{level:2,title:"Adding a specific endpoint",slug:"adding-a-specific-endpoint",children:[]}],filePathRelative:"guide/usage/groups.md",git:{updatedTime:1656249651e3}}},21733:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const o=(0,n(66252).uE)('<h1 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h1><p>Zigbee2MQTT has support for Zigbee groups. By using Zigbee groups you can control multiple devices simultaneously with one command.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Groups can also be managed via the frontend <em>Groups</em> tab.</p></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Add the following to your <code>configuration.yaml</code>.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>\n  <span class="token comment"># ID, each group should have a different numerical ID</span>\n  <span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span>\n    <span class="token comment"># Required: Name which will be used to control the group</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> group_1\n    <span class="token comment"># Required: Retain messages (true/false) (default: false)</span>\n    <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment"># Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)</span>\n    <span class="token key atrule">transition</span><span class="token punctuation">:</span> <span class="token number">2</span>\n    <span class="token comment"># Optional: Change group state when one of the devices in it changes state, see &#39;State changes&#39; below (default: true)</span>\n    <span class="token key atrule">optimistic</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token comment"># Optional: Devices of this group,</span>\n    <span class="token comment"># Note: This can be the ieeeAddr of the device or the friendly_name (default: empty)</span>\n    <span class="token key atrule">devices</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;0x00158d00018255df&#39;</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;some_device_friendly_name&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>The groupID (in the above example <code>&#39;1&#39;</code>) should be a numerical string. In case you want to use a hexadecimal groupID (e.g. <code>0xe24c</code>) you should first convert it to a numerical string (e.g. <code>57932</code>).</p><p>If using the Hassio add-on, restart it after modifying your <code>configuration.yaml</code> as above.</p><h2 id="mqtt-commands" tabindex="-1"><a class="header-anchor" href="#mqtt-commands" aria-hidden="true">#</a> MQTT commands</h2><p>Devices can also be added/removed from groups via MQTT, the possible topics are:</p><ul><li><code>zigbee2mqtt/bridge/request/group/members/add</code>: add a device to a group</li><li><code>zigbee2mqtt/bridge/request/group/members/remove</code> remove a device from a group</li><li><code>zigbee2mqtt/bridge/request/group/members/remove_all</code> remove a device from all groups</li></ul><p>The payload should be <code>{&quot;group&quot;: GROUP, &quot;device&quot;: DEVICE}</code> where <code>GROUP</code> is the <code>friendly_name</code> of the group you want to add/remove the device from, <code>DEVICE</code> is the <code>friendly_name</code> of the device you want to add/remove from the group. Example payload: <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_bulb&quot;}</code>, example response: <code>{&quot;data&quot;:{&quot;device&quot;:&quot;my_bulb&quot;,&quot;group&quot;:&quot;my_group&quot;},&quot;status&quot;:&quot;ok&quot;}</code>. In case of executing a <code>remove_all</code> the <code>group</code> property in the request can be omitted.</p><p>When removing a device from a group and when the group has any devices bound to it. The reporting of this members will be disabled, if you want to skip this use <code>skip_disable_reporting</code> (e.g. <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_bulb&quot;, &quot;skip_disable_reporting&quot;: true}</code>).</p><h2 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling" aria-hidden="true">#</a> Controlling</h2><p>Controlling a group is similar to controlling a single device. For example to turn on all devices that are part of group send a MQTT message to <code>zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set</code> with payload:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ON&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="state-changes" tabindex="-1"><a class="header-anchor" href="#state-changes" aria-hidden="true">#</a> State changes</h2><p>By default when one of the devices in a group changes its state, the group state will update to reflect the change. If any lights within the group have a state of <code>on</code>, the group state will stay <code>on</code>. Also when the state of a group is changed by a command (so not via a state change of a device in it; see previous line), all devices in the group will also change its state. This behavior can be disabled by setting <code>optimistic: false</code> for the group.</p><h2 id="how-do-groups-work" tabindex="-1"><a class="header-anchor" href="#how-do-groups-work" aria-hidden="true">#</a> How do groups work?</h2><p>By using the above <code>add</code> command above, a device will be added to a group. The device itself is responsible for storing to which groups it belongs. Others, e.g. the coordinator, do not have knowledge to which device a groups belongs.</p><p>When using the <code>set</code> command, e.g. to turn on all devices in a group, a broadcast request is send to <strong>all</strong> devices in the network. The device itself then determines if it belongs to that group and if it should execute the command.</p><h2 id="adding-a-specific-endpoint" tabindex="-1"><a class="header-anchor" href="#adding-a-specific-endpoint" aria-hidden="true">#</a> Adding a specific endpoint</h2><p>In case you want to add a device to a group with multiple endpoints, e.g. a QBKG03LM with 2 buttons you can specify it by adding the endpoint name to the <code>DEVICE</code> in the request payload in the format of <code>DEVICE/ENDPOINT</code>. Example request payload <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_switch/right&quot;}</code>.</p>',23),s={},t=(0,n(83744).Z)(s,[["render",function(e,a){return o}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[n,o]of a)e[n]=o;return e}}}]);