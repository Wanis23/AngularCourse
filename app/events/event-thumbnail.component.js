"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//-------Child Component----------------------------
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
        /*  const isEarlyStart = this.event && this.event.time === '8:00 am'
          return {green: isEarlyStart, bold: isEarlyStart}*/
        if (this.event && this.event.time === '8:00 am')
            return 'green bold';
        return '';
    };
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n                  <div class=\"well hoverwell thumbnail\">\n                 \n                  <h2>{{event?.name}}</h2>\n                    <div>Date : {{event.date}}</div>\n                    \n                    <!-- <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"event?.time\">Time : {{event.time}} -->\n                    <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">Time : {{event.time}}\n                        <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n                        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n                        <span *ngSwitchDefault>(Normal Start)</span>\n                    </div>\n\n                    <div>Price : {{event.price}}</div>\n                    <div *ngIf=\"event?.location\">\n                        <span>Location : {{event.location?.address}}</span>\n                        <span class=\"pad-left\">\n                              {{event.location?.city}},\n                              {{event.location?.country}}\n                        </span>\n                    </div>\n                   <div *ngIf=\"event?.onlineUrl\"><span>Online URL:{{event.onlineUrl}}</span></div>\n                  </div>\n      ",
        styles: ["\n          .thumbnail { min-height: 210px; }\n          .pad-left { margin-left: 10px; }\n          .well div { color: #bbb; }\n      "]
    }),
    __metadata("design:paramtypes", [])
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map