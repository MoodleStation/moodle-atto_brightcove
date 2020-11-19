YUI.add("moodle-atto_brightcove-button",function(d,e){var o='<form class="mform atto_form atto_brightcove" id="atto_brightcove_form"><label for="brightcove_accountid_entry">'+M.str.atto_brightcove.enter_account_id+'</label><input class="form-control fullwidth " type="text" id="brightcove_accountid_entry"size="32" required="true" value="{{brightcoveAccount}}"/><label for="brightcove_videoid_entry">'+M.str.atto_brightcove.enter_video_id+'</label><input class="form-control fullwidth " type="text" id="brightcove_videoid_entry"size="32" required="true"/><label for="brightcove_playerid_entry">'+M.str.atto_brightcove.enter_player_id+'</label><input class="form-control fullwidth " type="text" id="brightcove_playerid_entry"size="32" required="true" value="{{brightcovePlayer}}"/><div class="mb-1"><label for="brightcove_sizing" class="full-width-labels">'+M.str.atto_brightcove.video_sizing+'</label><br><div class="form-check form-check-inline">  <input class="form-check-input" type="radio" name="brightcove_sizing" id="inlineRadio1" value="res" checked>  <label class="form-check-label" for="inlineRadio1">'+M.str.atto_brightcove.video_responsive+'</label></div><div class="form-check form-check-inline">  <input class="form-check-input" type="radio" name="brightcove_sizing" id="inlineRadio2" value="fix">  <label class="form-check-label" for="inlineRadio2">'+M.str.atto_brightcove.video_fixed+'</label></div></div><div class="mb-1" >    <label>'+M.str.atto_brightcove.video_size+'</label>    <div class="form-inline " >        <label class="accesshide">'+M.str.atto_brightcove.video_width+'</label>        <input type="text" class="form-control mr-1  input-mini" size="4" id="brightcove_width" value="960"> x        <label class="accesshide">'+M.str.atto_brightcove.video_height+'</label>        <input type="text" class="form-control ml-1 input-mini" size="4" id="brightcove_height" value="540">        <label class="accesshide">Unit</label>        <select class="form-control ml-1 input-mini"  id="brightcove_width_unit">            <option value="px" selected>px</option>            <option value="cm" >cm</option>            <option value="%" >%</option>        </select>    </div></div><div class="clearfix"></div><div class="mdl-align"><br><button class="btn btn-secondary submit" type="submit">'+M.str.atto_brightcove.insert_brightcove_video+"</button></div></form>";d.use("core/event").namespace("M.atto_brightcove").Button=d.Base.create("button",d.M.editor_atto.EditorPlugin,[],{_currentSelection:null,initializer:function(){this.get("disabled")||this.addButton({icon:"brightcove",iconComponent:"atto_brightcove",callback:this._handleBrightCoveUpload,callbackArgs:"brightcove"})},_handleBrightCoveUpload:function(){this.getDialogue({headerContent:M.str.atto_brightcove.pluginname,focusAfterHide:!0,width:660}).set("bodyContent",this._getDialogueContent(this.get("host").getSelection())).show(),M.form.shortforms({formid:"atto_brightcove_form"})},_getDialogueContent:function(e){var t={brightcovePlayer:this.get("brightcovePlayer"),brightcoveAccount:this.get("brightcoveAccount")},i=d.Node.create(d.Handlebars.compile(o)(t));return this._attachEvents(i,e)},_attachEvents:function(e,n){return e.one(".submit").on("click",function(e){var t,i,o,r=e.currentTarget.ancestor(".atto_form"),c=r.one("#brightcove_accountid_entry").get("value"),a=r.one("#brightcove_videoid_entry").get("value"),l=r.one("#brightcove_playerid_entry").get("value");c&&a&&l&&(e.preventDefault(),t=this._getMediaHTMLBrightcove(e.currentTarget.ancestor(".atto_form")),i=this.get("host"),this.getDialogue({focusAfterHide:null}).hide(),t&&(i.setSelection(n),i.insertContentAtFocusPoint(t),o=$(t),d.use("event","moodle-core-event",function(e){$(document).trigger(M.core.event.FILTER_CONTENT_UPDATED,[o]);var t=new e.NodeList(o.get());e.fire(M.core.event.FILTER_CONTENT_UPDATED,{nodes:t})}),this.markUpdated()))},this),e},_getMediaHTMLBrightcove:function(e){var t=e.one("#brightcove_width_unit").get("value")||"px",i=e.one("#brightcove_width").get("value")+t,o=e.one("#brightcove_height").get("value")+t,r=document.querySelector('input[name="brightcove_sizing"]:checked').value,c={accountId:e.one("#brightcove_accountid_entry").get("value"),videoId:e.one("#brightcove_videoid_entry").get("value"),playerId:e.one("#brightcove_playerid_entry").get("value")};return"res"===r?c.brightcoveResWidth=i:(c.brightcoveWidth=i,c.brightcoveHeight=o),c.videoId?d.Handlebars.compile('<div {{#brightcoveResWidth}}style="max-width: {{../brightcoveResWidth}}" {{/brightcoveResWidth}} ><video-js id="my_player_{{videoId}}"    data-video-id="{{videoId}}"    data-account="{{accountId}}"    data-player="{{playerId}}"    data-embed="default"    data-application-id    class="vjs-big-play-centered"    {{#brightcoveWidth}}width="{{../brightcoveWidth}}" {{/brightcoveWidth}}    {{#brightcoveHeight}}height="{{../brightcoveHeight}}" {{/brightcoveHeight}}    controls></video-js></div>')(c):""}},{ATTRS:{disabled:{value:!0},area:{value:{}},brightcovePlayer:{value:null},brightcoveAccount:{value:null}}})},"@VERSION@");