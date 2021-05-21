class ClassFactory(type):

    def __new__(cls, future_class_name, future_class_parents, future_class_attr):
        def hello(self):
            print(f"Hello, {self.name}")

        def whatsapp(self):
            print(f"Whatsapp, {self.name}")

        class_attr = dict((name, value) for name, value in future_class_attr.items())

        if 'whatsapp' not in class_attr:
            class_attr.update({"whatsapp": hello})

        return super(ClassFactory, cls).__new__(cls, future_class_name, future_class_parents, class_attr)

class First(metaclass=ClassFactory):

    def __init__(self, name):
        self.name = name

    def whatsapp(self):
        print(f"Whatsapp from {self.name}")


class Second(metaclass=ClassFactory):

    def __init__(self, name):
        self.name = name



class Third(metaclass=ClassFactory):

    def __init__(self, name):
        self.name = name

    def whatsapp(self):
        print(f"Whatsapp from {self.name}")


a = First("First class")
a.whatsapp()

b = Second("Second class")
b.whatsapp()

c = Third("Third class")
c.whatsapp()