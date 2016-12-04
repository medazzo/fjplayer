            this.menudiv = menuObj,
                this.menuBtn = settingBtnObj,

                this.goSettingMenu = function() {
                    // second call :to  hide 
                    if (this.menudiv.style.visibility == 'visible')
                        this.menudiv.style.visibility = 'hidden';

                    var rect = this.menuBtn.getBoundingClientRect();
                    this.menudiv.style.left = rect.left + 'px';
                    this.menudiv.style.top = rect.top - (rect.height * Math.max($scope.tracksArray.subs.length,
                        $scope.tracksArray.audio.length)) + 'px'
                    this.menudiv.style.visibility = 'visible';
                },
                this.setSubs = function(index) {
                    //json array 
                    for (var i = 0; i < $scope.tracksArray.subs.length; i++) {
                        if ($scope.tracksArray.subs[i].index == index) {
                            $scope.tracksArray.subs[i].actif = true;
                        } else {
                            $scope.tracksArray.subs[i].actif = false;
                        }
                    }
                    //video array
                    for (var i = 0; i < $scope.video.textTracks.length; i++) {
                        if (i == index) {
                            $scope.video.textTracks[i].mode = 'showing';
                        } else {
                            $scope.video.textTracks[i].mode = 'hidden';
                        }
                    }
                    //finish
                    this.menudiv.style.visibility = 'hidden';
                },
                this.setAudio = function(index) {
                    //json array 
                    for (var i = 0; i < $scope.tracksArray.audio.length; i++) {
                        if ($scope.tracksArray.audio[i].index == index)
                            $scope.tracksArray.audio[i].actif = true;
                        else
                            $scope.tracksArray.audio[i].actif = false;
                    }
                    //video array
                    for (var i = 0; i < $scope.video.videoTracks.length; i++) {
                        if (i == index) {
                            $scope.video.videoTracks[i].selected = true;
                        } else {
                            $scope.video.videoTracks[i].selected = false;
                        }
                    }
                    //finish
                    this.menudiv.style.visibility = 'hidden';
                }