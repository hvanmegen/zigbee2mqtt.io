"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62],{79063:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-7406d19c",path:"/devices/QBKG26LM.html",title:"Xiaomi QBKG26LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi QBKG26LM control via MQTT",description:"Integrate your Xiaomi QBKG26LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (center endpoint)",slug:"switch-center-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Operation_mode (enum, left endpoint)",slug:"operation-mode-enum-left-endpoint",children:[]},{level:3,title:"Operation_mode (enum, center endpoint)",slug:"operation-mode-enum-center-endpoint",children:[]},{level:3,title:"Operation_mode (enum, right endpoint)",slug:"operation-mode-enum-right-endpoint",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Power_outage_memory (binary)",slug:"power-outage-memory-binary",children:[]},{level:3,title:"Led_disabled_night (binary)",slug:"led-disabled-night-binary",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Flip_indicator_light (binary)",slug:"flip-indicator-light-binary",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/QBKG26LM.md",git:{updatedTime:1656249651e3}}},2577:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var i=o(66252);const d=(0,i.uE)('<h1 id="xiaomi-qbkg26lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-qbkg26lm" aria-hidden="true">#</a> Xiaomi QBKG26LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>QBKG26LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara D1 3 gang smart wall switch (with neutral wire)</td></tr><tr><td>Exposes</td><td>switch (state), operation_mode, power, power_outage_memory, led_disabled_night, device_temperature, flip_indicator_light, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/QBKG26LM.jpg" alt="Xiaomi QBKG26LM"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),a=(0,i.Uk)("How to use device type specific configuration"),c=(0,i.uE)('<ul><li><p><code>device_temperature_precision</code>: Number of digits after decimal point for device_temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="operation-mode-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-left-endpoint" aria-hidden="true">#</a> Operation_mode (enum, left endpoint)</h3><p>Decoupled mode for left button. Value can be found in the published state on the <code>operation_mode_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_left&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-center-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-center-endpoint" aria-hidden="true">#</a> Operation_mode (enum, center endpoint)</h3><p>Decoupled mode for center button. Value can be found in the published state on the <code>operation_mode_center</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_center&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_center&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-right-endpoint" aria-hidden="true">#</a> Operation_mode (enum, right endpoint)</h3><p>Decoupled mode for right button. Value can be found in the published state on the <code>operation_mode_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_right&quot;: NEW_VALUE}</code>. The possible values are: <code>control_relay</code>, <code>decoupled</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary" aria-hidden="true">#</a> Power_outage_memory (binary)</h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power_outage_memory is ON, if <code>false</code> OFF.</p><h3 id="led-disabled-night-binary" tabindex="-1"><a class="header-anchor" href="#led-disabled-night-binary" aria-hidden="true">#</a> Led_disabled_night (binary)</h3><p>Enable/disable the LED at night. Value can be found in the published state on the <code>led_disabled_night</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_disabled_night&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_disabled_night&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_disabled_night is ON, if <code>false</code> OFF.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="flip-indicator-light-binary" tabindex="-1"><a class="header-anchor" href="#flip-indicator-light-binary" aria-hidden="true">#</a> Flip_indicator_light (binary)</h3><p>After turn on, the indicator light turns on while switch is off, and vice versa. Value can be found in the published state on the <code>flip_indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;flip_indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flip_indicator_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flip_indicator_light is ON, if <code>OFF</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_left</code>, <code>double_left</code>, <code>single_center</code>, <code>double_center</code>, <code>single_right</code>, <code>double_right</code>, <code>single_left_center</code>, <code>double_left_center</code>, <code>single_left_right</code>, <code>double_left_right</code>, <code>single_center_right</code>, <code>double_center_right</code>, <code>single_all</code>, <code>double_all</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),r={},n=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);