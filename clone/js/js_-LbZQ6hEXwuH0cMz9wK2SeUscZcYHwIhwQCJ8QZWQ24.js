var ielts_user_progress_type='';var ielts_user_progress_value=0;var ielts_user_progress_nid=0;var ielts_user_interval=150000;(function($){Drupal.behaviors.ielts_user_progress={attach:function(context,settings){ielts_user_progress_type=Drupal.settings.ielts_user_progress.progress_type;ielts_user_progress_value=Drupal.settings.ielts_user_progress.data_value;ielts_user_progress_nid=Drupal.settings.ielts_user_progress.nid;var ielts_user_progress_idleTime=0;setInterval(ielts_user_progress_time_spent_ajax,ielts_user_interval);$('body').keypress(function(e){ielts_user_progress_idleTime=0;});function ielts_user_progress_time_spent_ajax(){ielts_user_progress_idleTime+=1;$('body').off('mousemove');$('body').mousemove(function(e){ielts_user_progress_idleTime=0;$(this).off('mousemove');});if(ielts_user_progress_idleTime<=2){$.post("/ielts_user_progress/ajax/tracking/ielts_user_progress_time_spent",{progress_type:ielts_user_progress_type,value:(ielts_user_interval/1000)})}}}};})(jQuery);function ielts_user_progress_send_data(){jQuery.post("/ielts_user_progress/ajax/tracking/ielts_user_progress_completion",{progress_type:ielts_user_progress_type,value:ielts_user_progress_value,nid:ielts_user_progress_nid}).done(function(data){jQuery('input.mark-lesson-complete').addClass('checked').attr('checked','checked').attr('disabled',false).trigger('click').attr('disabled','disabled');});};