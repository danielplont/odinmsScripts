/* Robin
	First NPC on Snail Hunting Ground I (40000)
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Welcome to #bOdinMS#k my friend! I take it you're as excited as me?");
		} else if (status == 1) {
			cm.sendNextPrev("I guess you know how to play MapleStory at least a bit. But there are some things about #bOdinMS#k you should know.");
		} else if (status == 2) {
			cm.sendNextPrev("Currently we're running version #rBeta#k which means that there are still a lot of things which don't work.");
		} else if (status == 3) {
			cm.sendNextPrev("So please be a bit understanding and help us by reporting any bugs you may encounter.");
		} else if (status == 4) {
			cm.sendNextPrev("The OdinMS forum is located at http://odinms.de/forum/. You can also join us on IRC at irc.euirc.net##odinms.");
		} else if (status == 5) {
			if (cm.getQuestStatus(100012) ==
				net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
				cm.sendNextPrev("One gift should be enough, don't you think?");
				return;
			}
			cm.startQuest(100012);
			cm.completeQuest(100012);
			if (cm.getQuestStatus(100012) ==
				net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
				cm.sendNextPrev("Oh yeah, since it's #rBeta#k and everything, what about a little welcome gift? Take look at your inventory!");
			}
		} else if (status == 6) {
			cm.sendPrev("And now... #bMay Odin be with you!#k");
		}
	}
}	
