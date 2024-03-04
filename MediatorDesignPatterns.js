function Member(name)
{
    this.name = name 
    this.chatroom = null
}

Member.prototype = {
    send: function (message,toMember){
        this.chatroom.send(message,this,toMember)
    },
    receive: function (message,fromMember)
    {
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}


function Chatroom(){
    this.members = {}
}

Chatroom.prototype = {
    addMember : function(member){
        this.members[member.name] = member
        member.chatroom = this
    },
    send: function (message,fromMember,toMember){
        toMember.receive(message,fromMember)
    }
}

const chat = new Chatroom()

const bob = new Member("Bob")
const joe = new Member("Joe")
const doe = new Member("Doe")

chat.addMember(bob)
chat.addMember(joe)
chat.addMember(doe)

bob.send("Hey, Joe" , joe)
