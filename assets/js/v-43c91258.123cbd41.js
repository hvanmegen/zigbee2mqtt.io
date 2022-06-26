"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27439],{72437:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-43c91258",path:"/devices/PM-B540-ZB.html",title:"Dawon DNS PM-B540-ZB control via MQTT",lang:"en-US",frontmatter:{title:"Dawon DNS PM-B540-ZB control via MQTT",description:"Integrate your Dawon DNS PM-B540-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-07-20T23:08:11.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PM-B540-ZB.md",git:{updatedTime:1656249651e3}}},38950:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const o=(0,i(66252).uE)('<h1 id="dawon-dns-pm-b540-zb" tabindex="-1"><a class="header-anchor" href="#dawon-dns-pm-b540-zb" aria-hidden="true">#</a> Dawon DNS PM-B540-ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PM-B540-ZB</td></tr><tr><td>Vendor</td><td>Dawon DNS</td></tr><tr><td>Description</td><td>IOT smart plug 16A</td></tr><tr><td>Exposes</td><td>device_temperature, switch (state), power, energy, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PM-B540-ZB.jpg" alt="Dawon DNS PM-B540-ZB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),r={},d=(0,i(83744).Z)(r,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);