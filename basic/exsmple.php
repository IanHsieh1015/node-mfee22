// class 是一種模板 -- new --> 用這模板做出一個物件

class animal {
    private $name;

    public function showName() {
        echo $this->name;
    }
}

// 繼承
class dog extends animal

$d = new dog();
echo $d->showName();